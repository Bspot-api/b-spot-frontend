# B-Spot Frontend

Public React frontend application for the B-Spot platform - a modern web interface for exploring companies linked to investment funds and influential networks.

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bspot-api/b-spot-frontend.git
   cd b-spot-frontend
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your API configuration
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```

5. **Build for production**
   ```bash
   pnpm build
   ```

## 📁 Project Structure

```
src/
├── features/          # Feature-based architecture
│   ├── auth/         # Authentication features
│   ├── dashboard/    # Dashboard features
│   └── home/         # Home page features
├── components/        # Reusable components
│   ├── auth/         # Authentication components
│   ├── shadcn/       # UI component library
│   └── shared/       # Shared components
├── hooks/            # Custom React hooks
├── types/            # TypeScript type definitions
└── lib/              # Utility libraries
```

## 🛠️ Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm test` - Run tests
- `pnpm lint` - Run linting
- `pnpm preview` - Preview production build

## 🔧 Development

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4.1
- **State Management**: React Query + Context API
- **Routing**: React Router v7
- **Architecture**: Feature-based organization

## 🎨 UI Components

- Built with shadcn/ui components
- Responsive design
- Dark/light theme support
- Internationalization (i18n)

## 📱 Features

- Company search and filtering
- Investment fund information
- Personality and sector data
- Responsive data tables
- Authentication system
- Multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

---

**Note**: This is the public frontend repository. For the complete platform, see the private repository.
