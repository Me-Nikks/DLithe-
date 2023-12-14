# lists
days=['mon','tue','wed','thu','fri','sat','sun'];
print(days);
days.append('mango') #append
print(days);

days.insert(3,'gog'); #insert
print(days);

j =['sad', 9, 'kk'];
del(j[2]);          #delete
print(j);

i = [2, 'hh', 2, 8, 'ww', 9, 'das', 'gog']
i = i[0:2]  #slicing 
print(i)

i.extend(j); #extend
print(i);


#string

name = "nikhildas"
capitalized = name.capitalize()
print(capitalized);  #capitalize

myname = "nikhildas"
uppercase = myname.upper()
print(uppercase);  #upper

greeting = "Hello, World!"
greet = greeting.replace("World", "Team")
print(greet)  #replace

sentence = "He is smart"
index = sentence.find("smart")
print(index)  #find

text = "I saw nothing as there was nothing. yes nothing was left"
count = text.count("nothing") 
print(count)  # count
print(r'c:\some\name') #r raw str
print('c:\some\name') #\ 

TEXT= 'HE IS A ' 'BOY OF BOY'
print(TEXT)

a= 1,2,3,4
b= 5,6,7,8
print('a=',a)



print('Py' 'thon')



for x in range(0,101):
    if x % 2 == 0:
        print('Even=', x)
    else:
        print('Odd=', x)

def fun_1(a):
    val = lambda a:a*100
    print(val(a))
fun_1(10)











