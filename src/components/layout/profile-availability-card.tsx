import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const ProfileAvailabilityCard = () => {
  return (
    <div className='flex items-center gap-3 py-2 pr-4 pl-2'>
      <Avatar size='lg'>
        <AvatarImage src='/images/profile/profile-desk.png' alt='Delcio Monarca' />
        <AvatarFallback>D</AvatarFallback>
      </Avatar>

      <div className='text-left'>
        <p className='text-sm font-medium'>Delcio Monarca</p>
        <p className='text-muted-foreground text-xs'>Backend Developer</p>
      </div>
    </div>
  )
}

export default ProfileAvailabilityCard
