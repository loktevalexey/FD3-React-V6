import React from 'react';

// вариант с возвратом функционального компонента
function withColorBackground(Comp) {
    // HOC withColorBackground должен вернуть КОМПОНЕНТ
    // в данном случае возвращаем компонент в функциональном стиле
    return props => (
      <div style={{backgroundColor:"yellow"}}>
        <Comp {...props} />
      </div>
    );
}

export { withColorBackground };
