# Medicine Free Cure Website

A modern, responsive website for Medicine Free Cure - a holistic health platform offering natural blood pressure control through the C.A.L.M routine.

## Tech Stack

- **Frontend**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Payments**: Razorpay
- **Deployment**: Vercel
- **Icons**: Lucide React

## Features

- 🏥 **Responsive Design**: Mobile-first approach with beautiful UI
- 💳 **Payment Integration**: Razorpay integration for secure payments
- 👤 **User Management**: Supabase authentication and user profiles
- 📱 **Modern UI**: Clean, professional design with smooth animations
- 🔒 **Secure**: Environment-based configuration and secure API routes
- 📊 **Analytics Ready**: Structured for easy analytics integration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- Razorpay account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd medfreecure
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

   # Razorpay Configuration
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   RAZORPAY_WEBHOOK_SECRET=your_razorpay_webhook_secret

   # Next.js Configuration
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. **Database Setup**
   
   Create the following tables in Supabase:
   
   ```sql
   -- Users table
   CREATE TABLE users (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     email VARCHAR UNIQUE NOT NULL,
     full_name VARCHAR,
     phone VARCHAR,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Orders table
   CREATE TABLE orders (
     id VARCHAR PRIMARY KEY,
     user_id UUID REFERENCES users(id),
     plan_type VARCHAR NOT NULL CHECK (plan_type IN ('gold', 'platinum')),
     amount INTEGER NOT NULL,
     currency VARCHAR NOT NULL DEFAULT 'INR',
     status VARCHAR NOT NULL DEFAULT 'created',
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Payments table
   CREATE TABLE payments (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id UUID REFERENCES users(id),
     order_id VARCHAR REFERENCES orders(id),
     amount INTEGER NOT NULL,
     currency VARCHAR NOT NULL DEFAULT 'INR',
     razorpay_payment_id VARCHAR,
     razorpay_order_id VARCHAR,
     status VARCHAR NOT NULL DEFAULT 'pending',
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Memberships table
   CREATE TABLE memberships (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id UUID REFERENCES users(id),
     plan_type VARCHAR NOT NULL CHECK (plan_type IN ('gold', 'platinum')),
     status VARCHAR NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'expired')),
     start_date TIMESTAMP WITH TIME ZONE NOT NULL,
     end_date TIMESTAMP WITH TIME ZONE NOT NULL,
     payment_id VARCHAR,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

5. **Razorpay Setup**
   
   - Create a Razorpay account
   - Get your API keys from the dashboard
   - Set up webhook endpoint: `https://yourdomain.com/api/webhook/razorpay`
   - Configure webhook events: `payment.captured`, `payment.failed`

6. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
medfreecure/
├── src/
│   ├── app/
│   │   ├── api/           # API routes
│   │   ├── success/       # Payment success page
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── MembershipPlans.tsx
│   │   ├── PaymentButton.tsx
│   │   └── ...
│   └── lib/               # Utility functions
│       ├── supabase.ts    # Supabase client
│       └── razorpay.ts    # Razorpay integration
├── public/                # Static assets
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
└── package.json
```

## Deployment

### Vercel Deployment

1. **Connect to Vercel**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Add environment variables in Vercel dashboard

2. **Configure Domain**
   - Add your custom domain in Vercel
   - Update Razorpay webhook URL

3. **Deploy**
   - Vercel will automatically deploy on every push to main branch

### Environment Variables for Production

Make sure to set these in your Vercel dashboard:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`
- `RAZORPAY_WEBHOOK_SECRET`
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`

## Features Overview

### 🏠 Homepage Sections
- **Hero Section**: Main CTA and doctor introduction
- **Why Learn**: Benefits and value proposition
- **Who Is This For**: Target audience
- **How It Works**: 3-step process
- **What You Will Learn**: Learning outcomes
- **Membership Plans**: Pricing and features
- **About Doctor**: Doctor's credentials and story
- **Testimonials**: Customer success stories
- **FAQ**: Common questions
- **Footer**: Links and contact information

### 💳 Payment Integration
- Razorpay payment gateway
- Secure payment processing
- Webhook handling for payment status
- Success/failure page handling

### 🔐 User Management
- Supabase authentication
- User profiles and memberships
- Payment history tracking

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@medfreecure.com or join our WhatsApp community.

## Acknowledgments

- Dr. Kanaiya S Gupta for the C.A.L.M routine
- All the patients who shared their success stories
- The open-source community for the amazing tools
