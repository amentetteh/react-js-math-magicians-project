import Calculator from './Calculator';

function CalculatorPage() {
  return (
    <div id="calculator-page">
      <aside className="page-left">
        Let us do some maths!
      </aside>
      <aside className="page-right">
        <Calculator />
      </aside>
    </div>
  );
}

export default CalculatorPage;
