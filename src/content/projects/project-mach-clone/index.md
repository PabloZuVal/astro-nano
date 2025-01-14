---
title: "🏦 MACH Android App Clone - UI Implementation"
description: "A comprehensive clone of MACH's prepaid banking application, built with modern Android development practices and Clean Architecture principles."
date: "Jan 01 2025"
repoURL: "https://github.com/PabloZuVal/Mach"
---

> ### Overview
> An in-depth implementation of the MACH banking application, showcasing modern Android development practices, clean architecture principles, and robust state management. This project serves as a practical exploration of financial application architecture and UI/UX patterns.

### 🛠️ Technical Stack
- #### **UI & Composition**
  - Jetpack Compose with Material 3 design system
  - Accompanist System UI Controller for seamless system bar handling
  - Custom animations and transitions
  - Responsive layouts for various screen sizes

- #### **Architecture & Design Patterns**
  - Clean Architecture with clear separation of concerns
  - MVVM pattern for presentation layer
  - Dependency Injection using Dagger Hilt
  - Navigation Component for screen management


- #### **Network & Data Layer**
  - Retrofit2 with OkHttp3 for API communication
  - Gson converter for JSON parsing
  - Kotlin Coroutines for asynchronous operations

### 🚧 Project Structure
```
📁 mach
├── 📄 MachApp.kt
├── 📄 MainActivity.kt
├── 📄 SharedViewModel.kt
├── 📁 core
│   ├── 📁 di
│   │   └── 📄 NetworkModule.kt
│   └── 📁 navigation
│       ├── 📄 BottomNavigationMenu.kt
│       ├── 📄 BottonSheetController.kt
│       ├── 📄 NavComposable.kt
│       └── 📄 NavigationController.kt
├── 📁 feature
│   ├── 📁 inicio
│   │   ├── 📁 data
│   │   │   ├── 📁 mapper
│   │   │   │   └── 📄 UserDataDtoMapper.kt
│   │   │   ├── 📁 remote
│   │   │   │   ├── 📁 api
│   │   │   │   │   └── 📄 UserDataApi.kt
│   │   │   │   └── 📁 dto
│   │   │   │       └── 📄 UserDataDto.kt
│   │   │   └── 📁 repository
│   │   │       └── 📄 UserDataRepositoryImpl.kt
│   │   ├── 📁 di
│   │   │   └── 📄 InicioModule.kt
│   │   ├── 📁 domain
│   │   │   ├── 📁 model
│   │   │   │   └── 📄 UserData.kt
│   │   │   ├── 📁 repository
│   │   │   │   └── 📄 UserDataRepository.kt
│   │   │   └── 📁 usecase
│   │   │       └── 📄 GetUserDataUseCase.kt
│   │   └── 📁 ui
│   │       ├── 📄 InicioScreen.kt
│   │       └── 📄 InicioViewModel.kt
│   ├── 📁 inversiones
│   │   └── 📁 ui
│   │       └── 📄 InversionesScreen.kt
│   ├── 📁 pin
│   │   └── 📁 ui
│   │       └── 📄 PinScreen.kt
│   ├── 📁 splash
│   │   └── 📁 ui
│   │       └── 📄 SplashScreen.kt
│   ├── 📁 tarjetas
│   │   └── 📁 ui
│   │       └── 📄 TarjetasScreen.kt
│   ├── 📁 transferencia
│   │   └── 📁 ui
│   │       └── 📄 TransferenciaScreen.kt
│   └── 📁 voucher
│       └── 📁 ui
│           └── 📄 VoucherScreen.kt
├── 📁 splash
│   ├── 📄 SplashActivity.kt
│   ├── 📁 navigation
│   │   ├── 📄 NavComposable.kt
│   │   └── 📄 NavigationController.kt
│   └── 📁 ui
│       └── 📁 theme
│           ├── 📄 Color.kt
│           ├── 📄 Theme.kt
│           └── 📄 Type.kt
└── 📁 ui
    ├── 📁 composable
    │   ├── 📄 AccountCard.kt
    │   ├── 📄 BottonSheet.kt
    │   ├── 📄 CardAccount.kt
    │   ├── 📄 CustomLista.kt
    │   ├── 📄 EvolveAccount.kt
    │   ├── 📄 HomeCardSection.kt
    │   ├── 📄 MeetMachCard.kt
    │   ├── 📄 OptionInvestCard.kt
    │   ├── 📄 RectangleCard.kt
    │   ├── 📄 ScrollAccounts.kt
    │   ├── 📄 ScrollImages.kt
    │   ├── 📄 ScrollInvest.kt
    │   ├── 📄 ShowMore.kt
    │   ├── 📄 SquareCard.kt
    │   ├── 📄 Topbar.kt
    │   └── 📄 WhatToDoTodaySection.kt
    └── 📁 theme
        ├── 📄 Color.kt
        ├── 📄 Theme.kt
        └── 📄 Type.kt
```


### ⭐ Key Features
- Comprehensive banking dashboard implementation
- Transaction history visualization
<!-- - Account management interfaces -->
<!-- - Secure payment flow simulation -->
- Real-time balance updates
<!-- - Dark/Light theme support with dynamic theming -->
- Smooth transitions and micro-interactions
- Error handling and loading states

### 🏗️ Architecture Overview
The project follows Clean Architecture principles with three main layers:
- **Presentation Layer**: MVVM pattern with Compose UI and ViewModels
- **Domain Layer**: Business logic and use cases
- **Data Layer**: Repository pattern with remote data sources

### 📱 UI Showcase
<br>
<div style="display: flex; justify-content: space-between;">
  <img src="/mach-clone-11.png" alt="Vista 1" style="width: 45%;">
  <img src="/mach-clone-22.png" alt="Vista 2" style="width: 45%;">
</div>
<br>
<div style="display: flex; justify-content: space-between;">
  <img src="/mach-clone-33.png" alt="Vista 1" style="width: 45%;">
  <img src="/mach-clone-44.png" alt="Vista 2" style="width: 45%;">
</div>
<br>
<div style="display: flex; justify-content: space-between;">
  <img src="/mach-clone-88.png" alt="Vista 1" style="width: 45%;">
  <img src="/mach-clone-55.png" alt="Vista 2" style="width: 45%;">
</div>
<br>
<div style="display: flex; justify-content: space-between;">
  <img src="/mach-clone-66.png" alt="Vista 1" style="width: 45%;">
  <img src="/mach-clone-77.png" alt="Vista 2" style="width: 45%;">
</div>

### 🔍 Technical Highlights
- Implementation of reactive UI patterns with Kotlin Flows
- Custom composables for reusable banking components
- Secure local data management
- Efficient state management using ViewModels
- Integration of material design components
- Custom theming system for consistent banking UI

### 📚 Key Learnings
- [x] Implementation of Clean Architecture in a banking context
- [x] State management patterns for financial applications
- [x] Performance optimization techniques for complex UIs
- [x] Implementation of modern Android development practices

### 🛠️ Development Practices
- Modular architecture for better scalability
- Code quality maintenance with static analysis tools
