# Frozify - Frontend

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Project Overview](#project-overview)
4. [Key Features](#key-features)
5. [Pages](#pages)
   - [Home Page](#home-page)
   - [Flash Sale](#flash-sale-ssr)
   - [Products](#products-ssr)
   - [Product Details](#product-details-ssr--ssg)
   - [Dashboard](#dashboard)
6. [Getting Started](#getting-started)
   - [Installation](#installation)
   - [Running the Application](#running-the-application)
7. [Contributing](#contributing)

## Introduction

Welcome to Frozify, your premier online platform for all your refrigerator needs. Whether you're looking for the latest models, top brands, or exclusive deals, Frozify has you covered. Our platform is designed to offer a seamless shopping experience tailored specifically for refrigerator enthusiasts, with a focus on user engagement, intuitive navigation, and a comprehensive product catalog.

## Technologies Used

**Frontend:**

- Next.js
- TypeScript
- Shadcn UI
- Tailwind CSS

**Backend:**

- Node.js
- Express
- TypeScript

**Database:**

- MongoDB (Database)
- Mongoose (Database schemas)

## Project Overview

Frozify is a dynamic marketplace dedicated to elevating user experience and functionality within the refrigerator niche. Leveraging advanced technologies such as Next.js and incorporating key features like Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR), Frozify ensures optimal performance and a visually appealing interface for users.

## Key Features

- **File-Based Routing:**
  - Organized navigation and intuitive URL structures for seamless browsing.
  - Enhanced user experience within the refrigerator niche.
- **Static Site Generation (SSG):**
  - Pre-rendered static pages for improved performance and faster page loads.
  - Optimal user engagement, especially for refrigerator listings.
- **Incremental Static Regeneration (ISR):**
  - Real-time data updates without compromising performance or scalability.
  - Up-to-date information on refrigerator availability and specifications.
- **Server-Side Rendering (SSR):**
  - Dynamic content rendering on the server for enhanced SEO capabilities.
  - Improved initial page load times, particularly for detailed refrigerator specifications and comparisons.
- **UI/UX Enhancements:**
  - Visually appealing components and responsive design for intuitive navigation.
  - Tailored browsing experience for refrigerator enthusiasts.
- **Server Components:**
  - Optimized rendering performance and efficient data fetching for smooth user experience.
  - Detailed gadget specifications and comparisons.
- **Loading and Not Found Page:**
  - Visual feedback during data fetching processes.
  - Custom 404 (Not Found) page for graceful error handling.

## Pages

### Home Page

- Showcase featured refrigeration appliances and promotions.
- Implement a navigation bar for easy access to different sections.
- Hero Section - Carousel with Product Image.
- Flash Sale.
- Brands.
- Trending Products.
- Footer with essential navigation links.

### Flash Sale (SSR)

- Display special offers on refrigeration appliances with countdown timers.
- Implement Server-Side Rendering (SSR) for flash sale page.

### Products (SSR)

- Implement filtering options based on brand, subcategory, rating and price range.
- Provide a card view of all refrigeration appliances.
- Implement Server-Side Rendering (SSR) for all products page.

### Product Details (SSR + SSG)

- Create detailed product pages featuring refrigerator specifications.
- Implement Static Site Generation (SSG) & Server-Side Rendering (SSR).
- SSR for the first 10 products and SSG for the rest.

### Dashboard

#### Overview

- Display general statistics and insights about user activity.
- Provide a snapshot of key metrics.

#### All Products (SSR)

- Provide a table view of all refrigeration appliances.
- Implement Server-Side Rendering (SSR).

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/iibrahim70/frozify-client/
   ```

2. Navigate to the project directory:

   ```bash
   cd frozify-client
   ```

### Running the Application

1. Install dependencies:

```bash
pnpm i
```

2. Run the development server:

```bash
pnpm dev
```

Open http://localhost:3000 in your browser to view the application.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or new features to add, please fork the repository and submit a pull request.
