Rails.application.routes.draw do
  resources :libraries
  resources :resources
  resources :exams
  resources :video_conferences
  resources :units
  resources :chats
  resources :attendances
  resources :users, only: [:index, :show, :create, :update, :destroy]
  resources :schools
  post "/login", to: "sessions#create"
  # Defines the root path route ("/")
  # root "articles#index"
end
