import { Button } from "./ui/button";

export type FilterCategory = 'todos' | 'bongs' | 'sedas' | 'dixavadores' | 'outros' | 'caixas-misteriosas';

interface ProductFilterProps {
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
}

const filterOptions = [
  { value: 'todos' as FilterCategory, label: 'Todos os Produtos' },
  { value: 'bongs' as FilterCategory, label: 'Bongs' },
  { value: 'sedas' as FilterCategory, label: 'Sedas' },
  { value: 'dixavadores' as FilterCategory, label: 'Dixavadores' },
  { value: 'outros' as FilterCategory, label: 'Outros Produtos' },
  { value: 'caixas-misteriosas' as FilterCategory, label: 'Caixas Misteriosas' },
];

export function ProductFilter({ activeFilter, onFilterChange }: ProductFilterProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 justify-center">
        {filterOptions.map((option) => (
          <Button
            key={option.value}
            variant={activeFilter === option.value ? "premium" : "minimal"}
            onClick={() => onFilterChange(option.value)}
            className="transition-all duration-300"
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
}