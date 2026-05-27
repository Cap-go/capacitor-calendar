package app.capgo.calendar.models.inputs

import com.getcapacitor.PluginCall
import app.capgo.calendar.utils.ImplementationHelper

data class OpenCalendarInput(
    private val call: PluginCall,
) {
    val date: Long = ImplementationHelper.getCalendarFromTimestamp(call.getLong("date")).timeInMillis
}
