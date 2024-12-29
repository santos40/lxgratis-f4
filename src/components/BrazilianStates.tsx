import { Button } from "./ui/button";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const states = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
  'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
  'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

const BrazilianStates = () => {
  return (
    <div className="w-full py-4 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <h3 className="text-sm font-medium text-muted-foreground mb-3">
          Buscar por estado:
        </h3>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-2">
            {states.map((state) => (
              <Button
                key={state}
                variant="outline"
                className="min-w-[3rem] hover:bg-primary hover:text-white transition-colors"
              >
                {state}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default BrazilianStates;