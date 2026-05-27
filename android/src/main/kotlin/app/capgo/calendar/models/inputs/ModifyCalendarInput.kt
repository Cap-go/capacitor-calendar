package app.capgo.calendar.models.inputs

import com.getcapacitor.PluginCall
import app.capgo.calendar.PluginError
import app.capgo.calendar.utils.ImplementationHelper

data class ModifyCalendarInput(
    private val call: PluginCall,
) {
    val id = call.getString("id")?.toLong() ?: throw PluginError.MissingId
    val title = call.getString("title")
    val color = call.getString("color")?.let { ImplementationHelper.hexToColorInt(it) }
}
