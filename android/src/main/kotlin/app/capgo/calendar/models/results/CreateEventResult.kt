package app.capgo.calendar.models.results

import com.getcapacitor.JSObject
import app.capgo.calendar.PluginError
import app.capgo.calendar.models.templates.JSResult

data class CreateEventResult(
    val id: Long?,
) : JSResult {
    init {
        if (id == null) {
            throw PluginError.FailedToRetrieveEventId
        }
    }

    override fun toJSON(): JSObject {
        val result = JSObject()
        result.put("id", id.toString())
        return result
    }
}
