import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const STACK = ['TypeScript', 'Node.js', 'NestJS', 'Next.js', 'Express', 'Linux', 'Docker', 'Git']

const ActivityCard = () => {
  return (
    <Card className='ring-border gap-4 rounded-3xl p-6 shadow-lg'>
      <CardContent className='space-y-4 p-0'>
        <div>
          <p className='text-sm font-semibold'>@delciomanico</p>
          <p className='text-muted-foreground text-xs'>Core stack</p>
        </div>

        <div className='flex flex-wrap gap-2'>
          {STACK.map(tech => (
            <Badge key={tech} variant='secondary' className='text-foreground h-6.5 rounded-full bg-(--background-darker) px-3'>
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default ActivityCard
