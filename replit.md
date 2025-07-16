# Fashion E-commerce Platform - Rebellious Spirits

## Overview

This is a modern fashion e-commerce platform called "Rebellious Spirits" built with a full-stack TypeScript architecture. The application features a React frontend with server-side rendering capabilities, Express.js backend, and PostgreSQL database integration using Drizzle ORM. The platform is designed for fashion drops/releases with countdown functionality, user authentication, shopping cart, wishlist, and a comprehensive product catalog.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared code:

- **Frontend**: React 18 with TypeScript, React Router for navigation, and TanStack Query for state management
- **Backend**: Express.js server with TypeScript for API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build System**: Vite for frontend bundling, ESBuild for server compilation

## Key Components

### Frontend Architecture
- **Component Structure**: Modular React components using shadcn/ui design system
- **State Management**: React Context for cart, user, and wishlist state with localStorage persistence
- **Routing**: React Router with pages for home, product details, wishlist, countdown, and 404
- **UI Framework**: Radix UI primitives with Tailwind CSS styling
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **API Structure**: RESTful endpoints with `/api` prefix
- **Middleware**: JSON parsing, URL encoding, and request logging
- **Error Handling**: Centralized error handling middleware
- **Development**: Hot reloading with Vite integration in development mode

### Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Current Schema**: Users table with username/password authentication
- **Migration System**: Drizzle migrations in `/migrations` directory
- **Connection**: Uses Neon serverless PostgreSQL connection

### Component Library
- **Design System**: shadcn/ui with "new-york" style variant
- **Theme**: Neutral color scheme with CSS variables
- **Components**: Comprehensive UI component library including forms, dialogs, navigation, and data display

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle business logic and database operations
3. **Database Operations**: Drizzle ORM provides type-safe database queries
4. **Response**: JSON responses sent back to client with proper error handling
5. **State Updates**: Context providers manage global state with localStorage persistence

## External Dependencies

### Core Dependencies
- **Database**: `@neondatabase/serverless` for PostgreSQL connection
- **ORM**: `drizzle-orm` and `drizzle-zod` for database operations and validation
- **UI Components**: Extensive Radix UI component collection
- **State Management**: `@tanstack/react-query` for server state
- **Routing**: `react-router-dom` for client-side navigation
- **Forms**: `react-hook-form` with `@hookform/resolvers`
- **Validation**: `zod` for schema validation
- **Styling**: `tailwindcss`, `class-variance-authority`, `clsx`

### Development Tools
- **Build**: Vite with React plugin and TypeScript support
- **Replit Integration**: Custom plugins for development environment
- **Session Storage**: `connect-pg-simple` for PostgreSQL session store
- **Utilities**: `date-fns`, `nanoid`, various UI utilities

## Deployment Strategy

### Development Environment
- **Local Development**: Uses Vite dev server with Express middleware integration
- **Hot Reloading**: Full-stack hot reloading with file watching
- **Environment Variables**: `DATABASE_URL` required for PostgreSQL connection

### Production Build
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: ESBuild compiles TypeScript server to `dist/index.js`
- **Static Assets**: Served by Express in production mode
- **Database**: Drizzle migrations applied via `npm run db:push`

### Configuration
- **TypeScript**: Shared tsconfig with path mapping for imports
- **Module System**: ESM modules throughout the application
- **Aliases**: Path aliases for clean imports (`@/`, `@shared/`)

## Special Features

### Fashion E-commerce Specific
- **Drop System**: Countdown timer for fashion releases
- **Wishlist**: Persistent wishlist with localStorage
- **Shopping Cart**: Full cart functionality with quantity management
- **User Authentication**: Mock authentication system ready for backend integration
- **Product Catalog**: Grid-based product display with detailed product pages
- **Rating System**: Star rating component for product reviews

### Technical Features
- **Type Safety**: End-to-end TypeScript with shared types
- **Responsive Design**: Mobile-first responsive UI
- **Error Boundaries**: Proper error handling and 404 pages
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Performance**: Optimized with lazy loading and code splitting capabilities

The application is designed to be easily extensible with additional features like payment processing, inventory management, and advanced user authentication systems.