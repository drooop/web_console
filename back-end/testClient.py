import requests

data = {
    'username': 'drop',
    'password': 'TQcps123'
}

r = requests.post(url='http://10.1.1.201:81/api/login', data=data)
# r = requests.get(url='http://10.1.1.201:81')
print(r.text)






