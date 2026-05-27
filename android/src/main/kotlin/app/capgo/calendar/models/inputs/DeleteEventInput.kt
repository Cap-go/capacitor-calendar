package app.capgo.calendar.models.inputs

import com.getcapacitor.PluginCall
import app.capgo.calendar.PluginError

data class DeleteEventInput(
    private val call: PluginCall,
) {
    val id = call.getString("id")?.toLong() ?: throw PluginError.MissingId
}
