Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :humedals do
    resources :contactos
    resources :fotos_humedals
    resources :eventos
    resources :denuncias
  end
  resources :usuarios do
    resources :suscripciones_humedals
  end
  resources :contactos
  resources :denuncias do
    resources :usuarios
    resources :humedals
  end
  resources :eventos do
    resources :contactos
    resources :humedals
  end
  resources :fotos_humedals
  resources :suscripciones_humedals
end
