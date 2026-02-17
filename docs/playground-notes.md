Claro, aquí tienes 4 tests unitarios usando Jest para las funciones `divide` y `discount`. Estos tests cubren casos normales y casos borde:

```js
const { divide, discount } = require('./example');

describe('divide', () => {
  test('divide números positivos correctamente', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('lanza error al dividir entre cero', () => {
    expect(() => divide(10, 0)).toThrow('No se puede dividir entre cero');
  });
});

describe('discount', () => {
  test('aplica descuento correctamente', () => {
    expect(discount(200, 25)).toBe(150);
  });

  test('limita porcentaje de descuento a 100', () => {
    expect(discount(100, 150)).toBe(0);
  });
});
```

---

### Explicación rápida de cada test:

- **divide - caso normal:** verifica que dividir 10 entre 2 devuelve 5.
- **divide - división por cero:** verifica que dividir por cero lanza el error esperado.
- **discount - descuento normal:** verifica un 25% de descuento sobre 200 devuelve 150.
- **discount - porcentaje > 100:** verifica que si el porcentaje es mayor a 100 se aplica el máximo descuento (100%).

Si quieres puedo ayudarte con tests en otro framework o con más casos. ¿Quieres?
