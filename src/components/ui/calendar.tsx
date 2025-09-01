import React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isToday } from "date-fns"
import { fr } from "date-fns/locale"

interface CalendarProps {
  selected?: Date;
  onSelect?: (date: Date) => void;
  disabled?: { before: Date };
  className?: string;
}

function Calendar({ selected, onSelect, disabled, className }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date())

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1))

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd })

  // Calculer les jours du mois précédent pour remplir la première semaine
  const firstDayOfWeek = monthStart.getDay()
  const daysFromPrevMonth = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1
  
  // Calculer les jours du mois suivant pour remplir la dernière semaine
  const lastDayOfWeek = monthEnd.getDay()
  const daysFromNextMonth = lastDayOfWeek === 0 ? 0 : 7 - lastDayOfWeek

  // Créer la grille complète
  const allDays = []
  
  // Ajouter les jours du mois précédent
  for (let i = daysFromPrevMonth; i > 0; i--) {
    const date = new Date(monthStart)
    date.setDate(date.getDate() - i)
    allDays.push({ date, isCurrentMonth: false })
  }
  
  // Ajouter les jours du mois actuel
  monthDays.forEach(date => {
    allDays.push({ date, isCurrentMonth: true })
  })
  
  // Ajouter les jours du mois suivant
  for (let i = 1; i <= daysFromNextMonth; i++) {
    const date = new Date(monthEnd)
    date.setDate(date.getDate() + i)
    allDays.push({ date, isCurrentMonth: false })
  }

  const handleDateClick = (date: Date) => {
    if (disabled?.before && date < disabled.before) return
    if (onSelect) onSelect(date)
  }

  const isDateDisabled = (date: Date) => {
    return disabled?.before && date < disabled.before
  }

  return (
    <div className={`p-4 ${className}`}>
      {/* Header avec navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          className="p-2 rounded hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        
        <h2 className="text-lg font-semibold">
          {format(currentMonth, 'MMMM yyyy', { locale: fr })}
        </h2>
        
        <button
          onClick={nextMonth}
          className="p-2 rounded hover:bg-gray-100 transition-colors"
        >
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
          const isSelected = selected && isSameDay(date, selected)
          const isCurrentDay = isToday(date)
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
              {format(date, 'd')}
            </button>
          )
        })}
      </div>
    </div>
  )
}

Calendar.displayName = "Calendar"

export { Calendar }