Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: :create
    resources :attributes, only: :show
    resources :products, only: [:index, :show]
    resource :session, only: [:create, :destroy, :show]

  end

  root "static_pages#root"
end
