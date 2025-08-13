import { useCallback } from 'react';

export interface SearchEvent {
  query: string;
  resultCount: number;
  timestamp: number;
  sessionId: string;
}

export interface SearchAnalytics {
  totalSearches: number;
  uniqueQueries: number;
  averageResultsPerQuery: number;
  topQueries: Array<{ query: string; count: number }>;
  noResultQueries: Array<{ query: string; count: number }>;
}

// Generate a session ID for tracking user sessions
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('search_session_id');
  if (!sessionId) {
    sessionId = `search_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('search_session_id', sessionId);
  }
  return sessionId;
};

// Store search events in localStorage for analytics
const storeSearchEvent = (event: SearchEvent): void => {
  try {
    const events = getStoredSearchEvents();
    events.push(event);
    
    // Keep only last 1000 events to prevent storage overflow
    const recentEvents = events.slice(-1000);
    localStorage.setItem('search_events', JSON.stringify(recentEvents));
  } catch (error) {
    console.warn('Failed to store search event:', error);
  }
};

const getStoredSearchEvents = (): SearchEvent[] => {
  try {
    const stored = localStorage.getItem('search_events');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.warn('Failed to retrieve search events:', error);
    return [];
  }
};

export const useSearchTracking = () => {
  const trackSearch = useCallback((query: string, resultCount: number) => {
    const event: SearchEvent = {
      query: query.toLowerCase().trim(),
      resultCount,
      timestamp: Date.now(),
      sessionId: getSessionId(),
    };

    storeSearchEvent(event);

    // Send to analytics service (if available)
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'search', {
        search_term: query,
        search_results: resultCount,
        custom_parameter_1: resultCount === 0 ? 'no_results' : 'has_results'
      });
    }

    // Console log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Search tracked:', event);
    }
  }, []);

  const getSearchAnalytics = useCallback((): SearchAnalytics => {
    const events = getStoredSearchEvents();
    
    if (events.length === 0) {
      return {
        totalSearches: 0,
        uniqueQueries: 0,
        averageResultsPerQuery: 0,
        topQueries: [],
        noResultQueries: [],
      };
    }

    // Calculate analytics
    const queryCount = new Map<string, number>();
    const noResultQueries = new Map<string, number>();
    let totalResults = 0;

    events.forEach(event => {
      // Count query frequency
      queryCount.set(event.query, (queryCount.get(event.query) || 0) + 1);
      
      // Track no-result queries
      if (event.resultCount === 0) {
        noResultQueries.set(event.query, (noResultQueries.get(event.query) || 0) + 1);
      }
      
      totalResults += event.resultCount;
    });

    // Sort and format top queries
    const topQueries = Array.from(queryCount.entries())
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([query, count]) => ({ query, count }));

    // Sort and format no-result queries
    const noResultQueriesArray = Array.from(noResultQueries.entries())
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([query, count]) => ({ query, count }));

    return {
      totalSearches: events.length,
      uniqueQueries: queryCount.size,
      averageResultsPerQuery: events.length > 0 ? totalResults / events.length : 0,
      topQueries,
      noResultQueries: noResultQueriesArray,
    };
  }, []);

  const clearSearchData = useCallback(() => {
    localStorage.removeItem('search_events');
    sessionStorage.removeItem('search_session_id');
  }, []);

  return {
    trackSearch,
    getSearchAnalytics,
    clearSearchData,
  };
};

export default useSearchTracking;
