# FreshPaper-1

[CUSTOMIZE: Replace with your project name and description]

Provider-agnostic web and mobile application with comprehensive AI agent ecosystem for seamless development.

## 🚨 Core Principle: NO OVER-ENGINEERING
This project prioritizes working code over perfect architecture. We follow the **3-Strike Rule**: simplify, revert, replace.

## 🚀 Quick Project Setup

### Prerequisites
- Node.js 20+
- Firebase CLI
- GitHub CLI

### 1. Initialize New Project
```bash
# Copy this template to your desired location
cp -r templates/freshpaper-1 /path/to/your/new-project
cd /path/to/your/new-project

# Initialize git repository
git init
git add .
git commit -m "Initial commit from Flying Nimbus template"
```

### 2. Configure Firebase
```bash
# Create new Firebase project at https://console.firebase.google.com
# Then connect this project:
firebase login
firebase init
# Select your new Firebase project

# Update firebase.json with your project ID:
# "projects": {
#   "default": "your-new-project-id"
# }
```

### 3. Setup GitHub Repository
```bash
# Create new GitHub repository
gh repo create your-project-name --public --description "Your project description"

# Add remote and push
git remote add origin git@github.com:yourusername/your-project-name.git
git branch -M main  
git push -u origin main
```

### 4. Environment Configuration
```bash
# Copy environment template
cp .env.example .env

# Update .env with your values:
# - Firebase configuration
# - JWT secrets
# - API keys
# - Database URLs
```

### 5. Install Dependencies & Start Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test
```

## 🤖 AI Agent Ecosystem

This project includes 8 specialized Claude Code agents:

1. **orchestrator** 🎯 - Multi-agent coordinator  
2. **backend-api** 🔧 - Server logic and APIs
3. **frontend-web** 💻 - Web applications
4. **mobile-developer** 📱 - Mobile apps  
5. **database-manager** 🗄️ - Database operations
6. **devops-engineer** ⚙️ - Infrastructure
7. **testing-specialist** 🧪 - Testing strategy
8. **security-auditor** 🔒 - Security auditing

### Usage Examples
```bash
# Simple task
> Use the backend-api subagent to add user endpoints

# Complex task  
> Use the orchestrator subagent to implement authentication
```

## 🎯 Project Customization Checklist

### Essential Configuration
- [ ] Update project name in package.json
- [ ] Configure Firebase project ID
- [ ] Set up GitHub repository  
- [ ] Update environment variables
- [ ] Customize README.md with project details

### Optional Customization
- [ ] Update app title and meta tags in public/index.html
- [ ] Modify color scheme and branding
- [ ] Add project-specific CI/CD workflows
- [ ] Configure monitoring and analytics
- [ ] Set up custom domain

### Security Setup
- [ ] Generate new JWT secrets
- [ ] Configure Firebase security rules
- [ ] Set up proper CORS policies
- [ ] Review and update .gitignore
- [ ] Configure environment-specific secrets

## 🔌 MCP Server Integration

This template includes pre-configured MCP (Model Context Protocol) servers for enhanced AI development:

### Available MCP Servers
- **Context 7** 🧠 - Long-term context and project memory
- **Browser** 🌐 - Automated web testing and E2E test generation
- **Supabase** 🗄️ - Alternative database provider for easy migration
- **Taskmaster** 📋 - Project management and task coordination
- **Exa Search** 🔍 - Enhanced search and research capabilities

### Setup MCP Servers
```bash
# Install MCP dependencies
npm install -g @context7/mcp-server browser-mcp-server @supabase/mcp-server taskmaster-mcp exa-labs/mcp

# Configure API keys in .env
CONTEXT7_API_KEY=your-context7-api-key
SUPABASE_URL=https://your-project.supabase.co
GITHUB_TOKEN=your-github-token
EXA_API_KEY=your-exa-api-key
```

See `MCP_INTEGRATION_GUIDE.md` for detailed configuration and usage examples.

## 🏗️ Architecture

### Technology Stack
- **Backend**: Node.js, TypeScript, GraphQL
- **Web**: Hotwire (Turbo + Stimulus) with Tailwind CSS
- **Mobile**: React Native (planned)
- **Database**: Firebase (provider-agnostic with Supabase ready)
- **CI/CD**: GitHub Actions
- **Hosting**: Firebase Hosting
- **Testing**: BDD-first with Cucumber + Playwright

### Provider Agnostic Design
- Current: Firebase backend
- Future: Easily switchable to AWS, Azure, Supabase or other providers
- All external services abstracted via interfaces
- MCP servers provide multiple provider options

## 📚 Documentation

- **Development Standards**: `.claude/CLAUDE.md`
- **Agent Documentation**: `.claude/agents/README.md`
- **API Documentation**: Generate with `npm run docs`
- **Architecture Decisions**: Document in `docs/` folder

## 🔧 Available Scripts

```bash
npm run dev              # Start development server
npm test                 # Run test suite
npm run build           # Build for production
npm run lint            # Lint code
npm run format          # Format code
npm run deploy:staging  # Deploy to staging
npm run deploy:prod     # Deploy to production
```

## 🎯 Next Steps

1. **Customize Configuration**: Update all placeholder values
2. **Define Features**: Plan your specific product features
3. **Set Up Monitoring**: Configure error tracking and analytics
4. **Plan Architecture**: Design your specific data models
5. **Start Building**: Use the AI agents to implement features

---

**Template Version**: 1.0.0
**Based on**: Flying Nimbus Foundation
**Last Updated**: 2025-08-07

Remember: This template embodies the **NO OVER-ENGINEERING** principle. Start simple, build incrementally, and let the AI agents guide your development process.