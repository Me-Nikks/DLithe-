#tuple, list, dictionary, sets
#tuple ()
#ordered indexed
#immutable

a=(6,8,9);
b=a*3;
print(b);
print(type(b));
print(b[3]);
#slicing
print(a[1:2]);
h=(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16);
print(h[2:9:4]);

#slicing []
#supports concatination
#ordered indexed


i =[2, 'hh', 2, 8, 'ww',9, 'das', 'gog'];
j =['sad', 9, 'kk'];
k=['asda', 55,'ds']
l=i+j+k; #concatination
print(l);
i[0]=3 #modification
print(i);
del(j[2]); #del
print(j);

days=['mon','tue','wed','thu','fri','sat','sun'];
print(days);
days.append('mango') #append
print(days);

days.insert(3,'gog'); #insert
print(days);



