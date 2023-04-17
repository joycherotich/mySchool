Rails.application.routes.draw do
  resources :libraries
  resources :resources
  resources :exams
  resources :video_conferences
  resources :units
  resources :chats
  resources :attendances
  resources :users
  resources :schools
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
