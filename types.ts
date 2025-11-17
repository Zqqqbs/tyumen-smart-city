import React from 'react';

export interface NewsArticle {
  id: number;
  imageUrl: string;
  date: string;
  description: string;
}

export interface EventItem {
  id: number;
  title: string;
  description?: string;
  imageUrl?: string;
  bgColor: string;
  textColor: string;
  colSpan?: number;
  rowSpan?: number;
}

export interface ManagementStep {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  stat1_val: string;
  stat1_desc: string;
  stat2_val: string;
  stat2_desc: string;
  buttonText: string;
  buttonColor: string;
}

export interface Project {
  id: number;
  title?: string;
  description: string;
  bgColor?: string;
  textColor?: string;
  category?: string;
}

export interface Resource {
  id: number;
  icon: string | React.ReactNode;
  name: string;
}
