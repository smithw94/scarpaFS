Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :products, only: [:index, :show]
    resources :attributes, only: :index
    resource :session, only: [:create, :destroy, :show]

  end

  root "static_pages#root"
end
