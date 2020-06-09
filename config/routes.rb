Rails.application.routes.draw do
  get 'staticpages/root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :edit, :index, :show] do 
      resources :playlists, only: [:index, :new, :create, :edit, :update, :destroy]
    end

    resources :playlists, only: [:show] do
      resources :tracks, only: [:index]
    end
    resources :tracks, only: [:create, :destroy]
  end
end
