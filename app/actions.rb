# Homepage (Root path)
get '/' do
  erb :index
end

get '/contacts' do
  content_type :json
  contacts = Contact.all
  contacts.to_json(only: [:name, :email], include: {phones: {only: [:label, :number]}})
end
