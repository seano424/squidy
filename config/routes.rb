Rails.application.routes.draw do
  devise_for :users
  root to: 'places#index'
  resources :places, only: [ :index, :show, :new, :create ] do
    resources :reviews, only: [ :index, :new, :create ]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
