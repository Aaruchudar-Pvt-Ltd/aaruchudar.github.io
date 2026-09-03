import { lazy, Suspense, type ComponentType } from "react";

type DynamicOptions = {
  ssr?: boolean;
  loading?: ComponentType;
};

export default function dynamic<P extends object>(
  importer: () => Promise<{ default: ComponentType<P> }>,
  options?: DynamicOptions,
) {
  const Comp = lazy(importer);
  const Fallback = options?.loading ?? (() => null);

  return function DynamicComponent(props: P) {
    return (
      <Suspense fallback={<Fallback />}>
        <Comp {...props} />
      </Suspense>
    );
  };
}
