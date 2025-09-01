import React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import dayjs from "dayjs"
import localizedFormat from "dayjs/plugin/localizedFormat"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"
import "dayjs/locale/fr"

dayjs.extend(localizedFormat)
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)
dayjs.locale("fr")

interface CalendarProps {
  selected?: Date;
  onSelect?: (date: Date) => void;
  disabled?: { before: Date };
  className?: string;
}

function Calendar({ selected, onSelect, disabled, className }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(dayjs())

  const nextMonth = () => setCurrentMonth(currentMonth.add(1, 'month'))
  const prevMonth = () => setCurrentMonth(currentMonth.subtract(1, 'month'))

  const monthStart = currentMonth.startOf('month')
  const monthEnd = currentMonth.endOf('month')

  // Créer la grille complète
  const allDays: { date: dayjs.Dayjs, isCurrentMonth: boolean }[] = []

  // Jours du mois précédent
  const firstDayOfWeek = monthStart.day() === 0 ? 6 : monthStart.day() - 1
  for (let i = firstDayOfWeek; i > 0; i--) {
    allDays.push({ date: monthStart.subtract(i, 'day'), isCurrentMonth: false })
  }

  // Jours du mois actuel
  for (let i = 0; i < monthEnd.date(); i++) {
    allDays.push({ date: monthStart.add(i, 'day'), isCurrentMonth: true })
  }

  // Jours du mois suivant
  const lastDayOfWeek = monthEnd.day()
  const daysFromNextMonth = lastDayOfWeek === 0 ? 0 : 7 - lastDayOfWeek
  for (let i = 1; i <= daysFromNextMonth; i++) {
    allDays.push({ date: monthEnd.add(i, 'day'), isCurrentMonth: false })
  }

  const handleDateClick = (date: dayjs.Dayjs) => {
    if (disabled?.before && date.isBefore(dayjs(disabled.before), 'day')) return
    onSelect?.(date.toDate())
  }

  const isDateDisabled = (date: dayjs.Dayjs) =>
    disabled?.before && date.isBefore(dayjs(disabled.before), 'day')

  return (
    <div className={`p-4 ${className}`}>
      {/* Header avec navigation */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="p-2 rounded hover:bg-gray-100 transition-colors">
          <ChevronLeft className="h-4 w-4" />
        </button>
        
        <h2 className="text-lg font-semibold">
          {currentMonth.format('MMMM YYYY')}
        </h2>
        
        <button onClick={nextMonth} className="p-2 rounded hover:bg-gray-100 transition-colors">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Jours de la semaine */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['lu', 'ma', 'me', 'je', 've', 'sa', 'di'].map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Grille des dates */}
      <div className="grid grid-cols-7 gap-1">
        {allDays.map(({ date, isCurrentMonth }, index) => {
          const isSelected = selected && date.isSame(dayjs(selected), 'day')
          const isCurrentDay = date.isSame(dayjs(), 'day')
          const isDisabled = isDateDisabled(date)

          return (
            <button
              key={index}
              onClick={() => handleDateClick(date)}
              disabled={isDisabled}
              className={`
                h-9 w-9 rounded-md text-sm font-normal transition-colors
                ${isCurrentMonth 
                  ? 'text-gray-900 hover:bg-gray-100' 
                  : 'text-gray-400'
                }
                ${isSelected 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : ''
                }
                ${isCurrentDay && !isSelected 
                  ? 'bg-gray-100 text-gray-900' 
                  : ''
                }
                ${isDisabled 
                  ? 'text-gray-300 cursor-not-allowed' 
                  : 'cursor-pointer'
                }
              `}
            >
              {date.date()}
            </button>
          )
        })}
      </div>
    </div>
  )
}

Calendar.displayName = "Calendar"

export { Calendar }
