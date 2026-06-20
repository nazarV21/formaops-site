import { ProductMockup } from "@/components/ProductMockup";

type SheetNormInterfaceMockupProps = {
  compact?: boolean;
};

export function SheetNormInterfaceMockup({
  compact = false,
}: SheetNormInterfaceMockupProps) {
  return <ProductMockup compact={compact} />;
}
