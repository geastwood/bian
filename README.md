# bian

collection of often-used data transformation methods.

## Array methods

### bian::pick(propName)

pick a property from list of objects.

```javascript
[{name: 'js'},  {name: 'php'}, {name: 'scala'}].bian().pick('name').toValue(); 

// ['js', 'php', 'scala'];
```

### bian::compact

filter out not trucy element in an array.

```javascript
[
  'first', NaN, '', false, 0, undefined, null, 'last'
].bian().compact().toValue();

// ['first', 'last']
```

### bian::unique

make unique of an array.

### bian::chunk(size)

split an array into groups by given size.

```javascript
[ 1, 2, 3, 4, 5 ].bian().chunk(2).toValue();

// [[1,2], [3,4], [5]]
```

## Object methods

### values

grab the values of an object

```javascript
{
  firstName: 'fei',
  lastName: 'liu',
  city: 'munich',
}.bian().values().toValue();

// ['fei', 'liu', 'munich'] 
```
