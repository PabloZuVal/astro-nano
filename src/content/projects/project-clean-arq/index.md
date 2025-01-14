---
title: "📖 Personal Library - Android App"
description: "Clean Architecture Android app showcasing modern development practices with Kotlin"
date: "Mar 26 2023"
repoURL: "https://github.com/"
---

### Project Description

Android application developed in Kotlin that implements Clean Architecture principles to manage a personal library. While simple in functionality, it demonstrates the implementation of modern Android development patterns and practices.

### Project Structure
```
📁 LibraryApp
├── 📄 LibraryApplication.kt
├── 📄 MainActivity.kt
├── 📁 data
│   ├── 📁 local
│   │   ├── 📁 dao
│   │   │   └── 📄 BookDao.kt
│   │   ├── 📁 database
│   │   │   └── 📄 AppDatabase.kt
│   │   └── 📁 entity
│   │       └── 📄 BookEntity.kt
│   ├── 📁 mapper
│   │   └── 📄 BookMapper.kt
│   ├── 📁 remote
│   │   ├── 📁 api
│   │   └── 📁 dto
│   └── 📁 repository
│       └── 📄 BookRepositoryImpl.kt
├── 📁 di
│   └── 📄 DatabaseModule.kt
├── 📁 domain
│   ├── 📁 model
│   │   ├── 📄 Book.kt
│   │   └── 📄 ReadStatus.kt
│   ├── 📁 repository
│   │   └── 📄 BookRepository.kt
│   └── 📁 usecase
│       ├── 📄 AddBookUseCase.kt
│       ├── 📄 GetAllBooksUseCase.kt
│       ├── 📄 GetBookByIdUseCase.kt
│       ├── 📄 SearchBooksUseCase.kt
│       └── 📄 UpdateBookStatusUseCase.kt
├── 📁 presentation
│   ├── 📁 common
│   │   ├── 📁 components
│   │   └── 📁 extensions
│   ├── 📁 model
│   │   ├── 📄 BookDetailUiState.kt
│   │   ├── 📄 BookListUiState.kt
│   │   └── 📄 BookUI.kt
│   ├── 📁 navigation
│   │   └── 📄 NavigationGraph.kt
│   └── 📁 screens
│       ├── 📁 bookdetail
│       │   ├── 📄 BookDetailScreen.kt
│       │   └── 📄 BookDetailViewModel.kt
│       ├── 📁 bookform
│       │   ├── 📄 BookFormScreen.kt
│       │   └── 📄 BookFormViewModel.kt
│       └── 📁 booklist
│           ├── 📄 BookListScreen.kt
│           └── 📄 BookListViewModel.kt
├── 📁 ui
│   └── 📁 theme
│       ├── 📄 Color.kt
│       ├── 📄 Theme.kt
│       └── 📄 Type.kt
└── 📁 util
```


### Architecture and Design Patterns

#### Clean Architecture
The application is structured in layers following Clean Architecture principles:

- **Presentation Layer**: Implements MVVM (Model-View-ViewModel) pattern
  - ViewModels handle presentation logic and UI states
  - Immutable states using `UiState` for each screen
  - Independent and reusable Composables in Jetpack Compose

- **Domain Layer**: Contains business logic
  - Use Cases for each specific operation
  - Domain models independent of data layer
  - Repository interfaces to maintain dependency inversion

- **Data Layer**: Handles persistence and data sources
  - Room Database for local storage
  - Repository implementations
  - Mappers to convert between data and domain models

#### Implemented Technologies and Tools

- **Jetpack Components**
  - Room: Local data persistence
  - Navigation: Single-activity navigation
  - ViewModel: UI state and logic management
  - Compose: Modern declarative UI

- **Dependency Injection**
  - Hilt for dependency injection
  - Modules organized by functionality
  - Appropriate scopes for each dependency

- **Coroutines and Flow**
  - Asynchronous operations with Coroutines
  - Flow for reactive data streams
  - StateFlow for UI states

### App Preview

<br>
<div style="display: flex; justify-content: space-between;">
  <img src="/libraryapp-1.png" alt="Vista 1" style="width: 45%;">
  <img src="/libraryapp-2.png" alt="Vista 2" style="width: 45%;">
</div>
<br>


### Implemented Best Practices

#### SOLID Principles
- **Single Responsibility**: Each class has a single responsibility
- **Open/Closed**: Use of interfaces to allow extensions
- **Dependency Inversion**: Dependencies toward abstractions
- **Interface Segregation**: Specific interfaces for each need

#### Design Patterns
- **Repository Pattern**: Abstraction of data sources
- **Mapper Pattern**: Conversion between data models
- **Factory Pattern**: Dependency creation in Hilt modules

#### Testing
- Architecture prepared for testing
- Separation of concerns that facilitates unit testing
- Independent and testable Use Cases

#### Data Flow
```
UI -> ViewModel -> UseCase -> Repository -> DataSource
```
1. UI observes ViewModel states
2. ViewModel executes Use Cases
3. Use Cases coordinate with Repository
4. Repository handles data using DataSources
5. Changes flow back as immutable states

### Application Features

- Book listing
- Book details
- Add/Edit books
- Book search
- Reading status
- Local persistence

Despite being a simple application in functionality, it demonstrates a robust implementation of modern Android architecture, following development best practices and maintaining clean, testable, and scalable code.
