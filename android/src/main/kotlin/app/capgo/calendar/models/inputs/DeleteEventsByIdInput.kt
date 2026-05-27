package app.capgo.calendar.models.inputs

import com.getcapacitor.PluginCall
import app.capgo.calendar.PluginError
import app.capgo.calendar.utils.ImplementationHelper

data class DeleteEventsByIdInput(
    private val call: PluginCall,
) {
    var ids = call.getArray("ids")?.let { ImplementationHelper.jsArrayToLongArray(it) } ?: throw PluginError.MissingId
}
