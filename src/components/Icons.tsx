import Image from 'next/image'

export const Icons = {
  DashboardLogo: ({ className }: { className?: string }) => (
    <Image
      className={className}
      src='/dashboard/dashboardLogo.svg'
      alt='logo'
      width={135}
      height={29}
    />
  ),
  MenuDots: ({ className }: { className?: string }) => (
    <Image
      className={className}
      src='/dashboard/menu.svg'
      alt='menu'
      width={20}
      height={20}
    />
  ),
  Notification: ({ className }: { className?: string }) => (
    <Image
      className={className}
      src='/dashboard/notification.svg'
      alt='notification'
      width={20}
      height={20}
    />
  ),
  Search: ({ className }: { className?: string }) => (
    <Image
      className={className}
      src='/dashboard/search.svg'
      alt='search'
      width={20}
      height={20}
    />
  ),
  DashboardMenu: ({ className }: { className?: string }) => (
    <Image
      className={className}
      src='/sidebar/dashboard_menu.svg'
      alt='logo'
      width={24}
      height={24}
    />
  ),
  AddToQueue: ({ className }: { className?: string }) => (
    <Image
      className={className}
      src='/sidebar/add_to_queue.svg'
      alt='add to queue'
      width={24}
      height={24}
    />
  ),

  Important: ({ className }: { className?: string }) => (
    <Image
      className={className}
      src='/sidebar/important.svg'
      alt='important'
      width={24}
      height={24}
    />
  ),

  Assignment: ({ className }: { className?: string }) => (
    <Image
      className={className}
      src='/sidebar/assignment.svg'
      alt='assignment'
      width={24}
      height={24}
    />
  ),

  Deliveries: ({ className }: { className?: string }) => (
    <Image
      className={className}
      src='/sidebar/deliveries.svg'
      alt='deliveries'
      width={20}
      height={20}
    />
  ),
  LocalShipping: ({ className }: { className?: string }) => (
    <Image
      className={className}
      src='/sidebar/local_shipping.svg'
      alt='local shipping'
      width={24}
      height={24}
    />
  ),

  ParcelTracking: ({ className }: { className?: string }) => (
    <Image
      className={className}
      src='/sidebar/parcel_tracking_logo.svg'
      alt='parcel tracking'
      width={24}
      height={24}
    />
  ),

  BusinessCenter: ({ className }: { className?: string }) => (
    <Image
      className={className}
      src='/sidebar/business_center.svg'
      alt='business center'
      width={24}
      height={24}
    />
  ),

  AccountBalance: ({ className }: { className?: string }) => (
    <Image
      className={className}
      src='/sidebar/account_balance.svg'
      alt='account balance'
      width={24}
      height={24}
    />
  ),

  DynamiceFeed: ({ className }: { className?: string }) => (
    <Image
      className={className}
      src='/sidebar/dynamic_feed.svg'
      alt='dynamic feed'
      width={24}
      height={24}
    />
  ),

  Settings: ({ className }: { className?: string }) => (
    <Image
      className={className}
      src='/sidebar/settings.svg'
      alt='settings'
      width={24}
      height={24}
    />
  ),
}
