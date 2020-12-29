Rails.application.routes.draw do
  devise_for :users
  root to: 'places#index'
  resources :places, only: [ :index, :show, :new, :create ] do
    member do
      put "like" => "places#upvote"
      put "unlike" => "places#downvote"
      put "removeupvote" => "places#removeupvote"
      put "removedownvote" => "places#removedownvote"
      put "selectplace" => "places#selectplace"
    end
    resources :reviews, only: [ :index, :new, :create ]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
