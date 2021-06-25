/*
 * Only necessary when no IMEI device (with any name) is present in the DSDT and a custom device-id
 * is needed to be set via DeviceProperties (some Sandy Bridge or Ivy Bridge configurations).
 *
 * Source: https://github.com/acidanthera/OpenCorePkg/tree/master/Docs/AcpiSamples/Source/SSDT-IMEI.dsl
 */
DefinitionBlock ("", "SSDT", 2, "DRTNIA", "IMEI", 0x00000000)
{
    External (_SB_.PCI0, DeviceObj)

    Scope (_SB.PCI0)
    {
        Device (IMEI)
        {
            Name (_ADR, 0x00160000)  // _ADR: Address
        }
    }
}

