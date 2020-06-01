Rails.application.routes.draw do
  get 'users/create'
  get 'users/show'
  get 'users/index'
  get 'users/edit'
  get 'sessions/create'
  get 'sessions/destroy'
  get 'sessions/new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
