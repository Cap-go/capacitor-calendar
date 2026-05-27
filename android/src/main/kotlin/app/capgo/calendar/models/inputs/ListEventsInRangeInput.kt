package app.capgo.calendar.models.inputs

import com.getcapacitor.PluginCall
import app.capgo.calendar.PluginError
import app.capgo.calendar.utils.ImplementationHelper

data class ListEventsInRangeInput(
    private var call: PluginCall,
) {
    val from: Long =
        call.getLong("from")?.let { ImplementationHelper.getCalendarFromTimestamp(it).timeInMillis } ?: throw PluginError.FromDateMissing
    val to: Long =
        call.getLong("to")?.let { ImplementationHelper.getCalendarFromTimestamp(it).timeInMillis } ?: throw PluginError.ToDateMissing
}
