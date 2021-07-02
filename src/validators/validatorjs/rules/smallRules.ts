export const smallRules = {
    id: [ 'required', 'regex:/^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/' ],
    name: 'required|string|min:3|max:32',
    surname: 'required|string|min:3|max:32',
    height: 'required|integer|min:175|max:200',
    weight: 'required|integer|min:65|max:120',
    birth_date: 'required|date',
    email: 'required|email',
    phone_number: [ 'required', 'regex:/^[0-9]{9}$/' ],
    password: 'required|string|min:6|max:64',
    repeated_password: 'required|same:password',
};