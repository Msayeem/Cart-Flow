// components/ProductFilters.tsx
"use client";
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProductFilters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('search') ?? '');

  // Debounce: wait 400ms after typing stops before updating the URL/search
  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (search) {
        params.set('search', search);
      } else {
        params.delete('search');
      }
      router.push(`${pathname}?${params.toString()}`);
    }, 400);

    return () => clearTimeout(timeout);
  }, [search]);

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <input
        type="text"
        placeholder="Search by product name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full sm:w-64 rounded-xl border border-slate-200 px-4 py-2 text-sm"
      />

      <select
        onChange={(e) => updateParam('productType', e.target.value)}
        defaultValue={searchParams.get('productType') ?? ''}
        className="rounded-xl border border-slate-200 px-4 py-2 text-sm"
      >
        <option value="">All Types</option>
        <option value="Tech & Electronics">Tech & Electronics</option>
        <option value="Fabrics & Apparel">Fabrics & Apparel</option>
        <option value="Digital Tools">Digital Tools</option>
      </select>

      <select
        onChange={(e) => updateParam('sort', e.target.value)}
        defaultValue={searchParams.get('sort') ?? ''}
        className="rounded-xl border border-slate-200 px-4 py-2 text-sm"
      >
        <option value="">Default Sort</option>
        <option value="asc">Type A-Z</option>
        <option value="desc">Type Z-A</option>
      </select>
    </div>
  );
};

export default ProductFilters;