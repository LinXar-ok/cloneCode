
import React from 'react';

export interface Benefit {
  title: string;
  description: string;
  // Use React.ReactNode which requires the React namespace to be imported
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
