import React from 'react';
import { createRoot } from 'react-dom/client';
import PayTypeSelector from 'PayTypeSelector';

document.addEventListener('turbolinks:load', () => {
  const parentElement = document.getElementById('pay-type-component');

  const root = createRoot(parentElement);
  root.render(<PayTypeSelector />);
});