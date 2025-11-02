import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { Skeleton } from '@/components/ui/skeleton';

export default function Dashboard() {
  const { user, loading, error } = useCurrentUser();

  if (loading) {
    return (
      <div className="space-y-8 p-8">
        <Skeleton className="h-12 w-1/2" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Skeleton className="h-96 md:col-span-2" />
          <Skeleton className="h-64" />
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="p-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-8">
      <h1 className="mb-8 text-4xl font-bold tracking-tight">
        Welcome back, {user?.name}!
      </h1>
      <DashboardLayout />
    </div>
  );
}
