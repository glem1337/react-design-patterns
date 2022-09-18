function A() {
  return <div>A</div>;
}

function B() {
  return <div>B</div>;
}

function C() {
  return <div>C</div>;
}

function Factory(props) {
  switch (props.component.type) {
    case 'A':
      return <A />;
    case 'B':
      return <B />;
    case 'C':
      return <C />;
    default:
      return <div>Reload...</div>;
  }
}

export default function App() {
  const cards = [
    {
      name: 'name-1',
      type: 'A',
    },
    {
      name: 'name-2',
      type: 'C',
    },
    {
      name: 'name-3',
      type: 'B',
    },
    {
      name: 'name-4',
      type: 'A',
    },
    {
      name: 'name-5',
      type: 'unknown',
    },
  ];

  return (
    <div>
      {cards.map((card) => (
        <Factory key={card.name} component={card} />
      ))}
    </div>
  );
}
