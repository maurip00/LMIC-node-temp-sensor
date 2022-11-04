/*******************************************************************************
 *
 *  File:         lmic-node-uplink-formatters.js
 * 
 *  Function:     LMIC-node uplink payload formatter JavaScript function(s).
 * 
 *  Author:       Leonel Lopes Parente
 *
 *  Mod ver by:   Maurip00
 * 
 *  Description:  These function(s) are for use with The Things Network V3. 
 *                 
 ******************************************************************************/

function decodeUplink(input) {
    var data = {} ;
    var warnings = [];

    if (input.fPort == 10) {
        data.temperature = ((input.bytes[0] << 8) + input.bytes[1])/100;
        data.counter = (input.bytes[2] << 8) + input.bytes[3];
    }
    else { 
        warnings.push("Unsupported fPort");
    }
    return {
        data: data,
        warnings: warnings
    };
}
