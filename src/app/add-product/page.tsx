"use client"

import { authClient } from '@/lib/auth-client';
import { Button, FieldError, Input, Label, ListBox, TextArea, TextField, Select} from '@heroui/react';
import { useRouter } from 'next/navigation';

import toast from 'react-hot-toast';

// 1. Define a strict interface for your product shape
interface ProductFormData {
  productName: string;
  productType: string;
  price: string; // FormData values are initially strings
  warrenty: string;
  imageUrl: string;
  description: string;
  userId?: string; // Optional because session might take a moment to load
sellerName?:string;
sellerEmail?:string;
}

const AddProduct = () => {
  const router = useRouter();
  
  // 2. The session hooks natively support Better-Auth type inference
  const { data: session } = authClient.useSession();
  const user = session?.user;

  // 3. Type the Form Submission Event explicitly
  const onSubmit= async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    
    // 4. Typecast the form entries structure cleanly
    const product = Object.fromEntries(formData.entries()) as unknown as ProductFormData;
    
    // Append the authenticated user context safely
    product.userId = user?.id;
    product.sellerName=user?.name;
    product.sellerEmail=user?.email;

    try {
      const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
      if (!serverUrl) {
        throw new Error("NEXT_PUBLIC_SERVER_URL environment variable is missing.");
      }

      const res = await fetch(`${serverUrl}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Fixed lowercase string mismatch
        },
        body: JSON.stringify(product)
      });

      if (!res.ok) {
        throw new Error("Failed to add facility server-side.");
      }

      // 5. Explicitly type the response data if you plan to use it
      const data: { success: boolean; id?: string } = await res.json();

      toast.success('Product added successfully!');
      router.push('/products');
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : 'Something went wrong.');
    }
  };

  return (
    <div className='animate-fade-up'>
      <h1 className="text-3xl font-extrabold tracking-tight ml-10 mt-10 text-slate-900 sm:text-4xl">
        Add <span className="text-orange-600">Product</span>
      </h1>

      <form onSubmit={onSubmit} className="p-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Destination Name */}
          <div >
            <TextField name="productName" isRequired>
              <Label>Product Name</Label>
              <Input placeholder="e.g. Watch" className="rounded-2xl" />
              <FieldError />
            </TextField>
          </div>

    

          {/* Category - Select Component */}
          <div>
            <Select name="productType" isRequired className="w-full" placeholder="Select Type">
              <Label>Product Type</Label>
              <Select.Trigger className="rounded-2xl">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="Tech & Electronics" textValue="Tech & Electronics">
                    Tech & Electronics
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Fabrics & Apparel" textValue="Fabrics & Apparel">
                    Fabrics & Apparel
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Digital Tools" textValue="Digital Tools">
                    Digital Tools
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Price */}
          <TextField name="price" type="number" isRequired>
            <Label>Price (USD)</Label>
            <Input type="number" placeholder="e.g. 45" className="rounded-2xl" />
            <FieldError />
          </TextField>

          {/* Capacity */}
          <TextField name="warrenty" type="number" isRequired>
            <Label>Warrenty (Years)</Label>
            <Input type="number" placeholder="e.g. 2" className="rounded-2xl" />
            <FieldError />
          </TextField>



       

          {/* Image URL */}
          <div className="md:col-span-2">
            <TextField name="imageUrl" isRequired>
              <Label>Image URL</Label>
              <Input type="url" placeholder="https://example.com/cricket-field.jpg" className="rounded-2xl" />
              <FieldError />
            </TextField>
          </div>

        

          {/* Description */}
          <div className="md:col-span-2">
            <TextField name="description" isRequired>
              <Label>Description</Label>
              <TextArea placeholder="Describe your product.." className="rounded-3xl" />
              <FieldError />
            </TextField>
          </div>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          variant="outline"
          className="w-full bg-orange-600 text-white text-[17px] rounded-[10px] font-semibold py-7"
        >
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;