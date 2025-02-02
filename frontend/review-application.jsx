import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { User, Wallet, UserCheck, Phone, Mail, CreditCard, MapPin } from "lucide-react"

const ReviewApplication = ({ formData = {} }) => {
  const randomNumber = Math.floor(10000 * Math.random() * 90000)

  // Default values for user data
  const userData = formData.user || {
    name: "",
    cnic: "",
    email: "",
    phone: "",
    address: "",
  }

  // Default values for loan details
  const loanData = {
    category: formData.category || "",
    subcategory: formData.subcategory || "",
    amount: formData.amount || 0,
  }

  // Default values for guarantors
  const guarantors = formData.guarantors || []

  return (
    (<Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <CreditCard className="h-5 w-5" />
          Application Review
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* User Details Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold">Personal Information</h3>
          </div>
          <Separator />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Full Name</p>
              <p className="font-medium">{userData.name}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">CNIC</p>
              <p className="font-medium">{userData.cnic}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Mail className="h-4 w-4" /> Email
              </p>
              <p className="font-medium">{userData.email}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Phone className="h-4 w-4" /> Phone
              </p>
              <p className="font-medium">{userData.phone}</p>
            </div>
            <div className="space-y-1 md:col-span-2">
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <MapPin className="h-4 w-4" /> Address
              </p>
              <p className="font-medium">{userData.address}</p>
            </div>
          </div>
        </div>

        {/* Loan Details Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold">Loan Details</h3>
          </div>
          <Separator />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Category</p>
              <Badge variant="secondary" className="font-medium">
                {loanData.category || "N/A"}
              </Badge>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Subcategory</p>
              <Badge variant="outline" className="font-medium">
                {loanData.subcategory || "N/A"}
              </Badge>
            </div>
            <div className="space-y-1 md:col-span-2">
              <p className="text-sm text-muted-foreground">Amount</p>
              <p className="text-xl font-semibold text-primary">PKR {loanData.amount.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Guarantor Details Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <UserCheck className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold">Guarantor Information</h3>
          </div>
          <Separator />
          <div className="grid gap-4">
            {guarantors.length > 0 ? (
              guarantors.map((guarantor, index) => (
                <Card key={index} className="bg-muted/50">
                  <CardContent className="pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Name</p>
                        <p className="font-medium">{guarantor.name}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">CNIC</p>
                        <p className="font-medium">{guarantor.cnic}</p>
                      </div>
                      <div className="space-y-1 md:col-span-2">
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">{guarantor.email}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-muted-foreground text-sm">No guarantors added</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>)
  );
}

export default ReviewApplication

