# Next.js 13 ISR Revalidation Bug

This repository demonstrates a bug encountered when using Incremental Static Regeneration (ISR) in Next.js 13.  The issue involves pages not being revalidated correctly after data changes, leading to stale content being served.

## Bug Description

The `pages/index.js` and `pages/about.js` files showcase a simple application. When data changes in this app, the ISR doesn't work correctly, therefore displaying stale content.   

## Setup

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.

## Steps to Reproduce

1. Observe initial page content.
2.  Simulate data changes (e.g., modify a data source). 
3. Notice that the pages are not updated, showing stale data, even after the revalidation time.

## Solution

This bug is solved by adding revalidation time in the `getStaticProps` function and using the `revalidate` option. Please refer to `bugSolution.js` for a demonstration.