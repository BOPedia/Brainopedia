import React from 'react';

export interface ArticleProps {
  setCurrentArticle?: (article: string) => void;
}

export type RouteMap = Record<string, React.ComponentType<ArticleProps>>;